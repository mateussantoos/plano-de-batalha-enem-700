import { useState, useEffect } from "react";
import { studyData } from "../constants/studyData";
import { generateQuestions } from "../services/gemini";
import Card from "../components/Card";
import AiQuizModalContent from "../components/layout/modal/AiQuizModalContent";
import VideoModalContent from "../components/VideoModalContent";
import Button from "../components/common/Button";
import { useAppContext } from "../contexts/AppContext";
import { useAuth } from "../contexts/AuthContext";
import {
  getUserDayCompletion,
  setUserDayCompletion,
} from "../services/userProgressService";

export default function Schedule() {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [generatingQuestions, setGeneratingQuestions] = useState<string | null>(
    null
  );
  const { setModalContent, setModalVisible } = useAppContext();
  const { user } = useAuth();
  const [completedDays, setCompletedDays] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    if (!user) return;
    // Carrega o progresso dos dias da semana selecionada
    const fetchCompletion = async () => {
      const week = studyData.schedule.weeks[selectedWeek];
      const newCompleted: Record<string, boolean> = {};
      await Promise.all(
        week.days.map(async (_d, dayIdx) => {
          const dayId = `${selectedWeek}-${dayIdx}`;
          newCompleted[dayId] = await getUserDayCompletion(user.uid, dayId);
        })
      );
      setCompletedDays(newCompleted);
    };
    fetchCompletion();
  }, [selectedWeek, user]);

  const handleToggleDay = async (dayId: string, current: boolean) => {
    if (!user) return;
    await setUserDayCompletion(user.uid, dayId, !current);
    setCompletedDays((prev) => ({ ...prev, [dayId]: !current }));
  };

  const handleGenerateQuestions = async (content: string) => {
    setGeneratingQuestions(content);

    try {
      const data = await generateQuestions(content);
      const quizContent = (
        <AiQuizModalContent questions={data.questions} topic={content} />
      );

      setModalContent(quizContent);
      setModalVisible(true);
    } catch (error) {
      setModalContent(
        <p className="text-red-500 font-bold">
          Erro ao gerar questões. Tente novamente.
        </p>
      );
    } finally {
      setGeneratingQuestions(null);
    }
  };

  const handleOpenVideo = (
    videoUrl: string | undefined,
    videoTitle: string | undefined,
    content: string,
    videos?: { videoUrl: string; videoTitle: string }[]
  ) => {
    if (!videoUrl && (!videos || videos.length === 0)) {
      alert("Nenhum vídeo disponível para este conteúdo.");
      return;
    }

    const videoContent = (
      <VideoModalContent
        videoUrl={videoUrl}
        videoTitle={videoTitle}
        explanation={content}
        videos={videos}
      />
    );

    setModalContent(videoContent);
    setModalVisible(true);
  };

  const scrollLeft = () => {
    const container = document.querySelector(".week-tabs-container");
    if (container) {
      container.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.querySelector(".week-tabs-container");
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section id="cronograma" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black text-gray-800">
          {studyData.schedule.title}
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-400 font-semibold tracking-wide leading-relaxed">
          {studyData.schedule.intro}
        </p>
      </div>
      <div className="border-b border-gray-200 relative">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide week-tabs-container">
          <nav
            className="-mb-px flex w-max min-w-full justify-start gap-6 sm:justify-center"
            aria-label="Tabs"
          >
            {studyData.schedule.weeks.map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedWeek(i)}
                className={`cursor-pointer whitespace-nowrap border-b-2 px-1 py-4 text-sm font-bold uppercase transition-colors duration-200
            ${
              selectedWeek === i
                ? "border-duo-green text-duo-green"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }
          `}
              >
                Semana {i + 1}
              </button>
            ))}
          </nav>
        </div>

        {/* Navigation buttons - ocultos em telas pequenas */}
        <button
          onClick={scrollLeft}
          className="hidden sm:block cursor-pointer absolute -left-10 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 z-10"
          aria-label="Rolar para esquerda"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className="hidden sm:block cursor-pointer absolute -right-10 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 z-10"
          aria-label="Rolar para direita"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-extrabold text-gray-700">
          Foco da Semana:{" "}
          <span className="text-duo-blue font-black uppercase">
            {studyData.schedule.weeks[selectedWeek].focus}
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyData.schedule.weeks[selectedWeek].days.map((d, dayIdx) => {
          const dayId = `${selectedWeek}-${dayIdx}`;
          const isCompleted = completedDays[dayId];
          const [loadingDay, setLoadingDay] = useState(false);
          return (
            <Card
              key={dayId}
              className={`p-5 transition-colors duration-200 ${
                isCompleted ? "bg-neutral-50 opacity-80 border-gray-500" : ""
              }`}
            >
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  {d.day}
                </h4>
                <p className="text-md font-semibold text-duo-blue mt-1">
                  {d.subject}
                </p>
                <div className="mt-4 text-gray-600 space-y-2">
                  <p className="text-sm font-base">
                    <span className="font-semibold">Conteúdo:</span> {d.content}
                  </p>
                  <p className="text-sm font-base">
                    <span className="font-semibold">Atividade:</span>{" "}
                    {d.activity}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                <Button
                  onClick={() => handleGenerateQuestions(d.content)}
                  isGenerating={generatingQuestions === d.content}
                  disabled={isCompleted}
                >
                  Praticar com IA
                </Button>
                {d.videos ? (
                  <Button
                    onClick={() =>
                      handleOpenVideo(undefined, undefined, d.content, d.videos)
                    }
                    variant="secondary"
                    className="w-full"
                    disabled={isCompleted}
                  >
                    📺 Assistir Videoaulas
                  </Button>
                ) : (
                  d.videoUrl && (
                    <Button
                      onClick={() =>
                        handleOpenVideo(d.videoUrl, d.videoTitle, d.content)
                      }
                      variant="secondary"
                      className="w-full"
                      disabled={isCompleted}
                    >
                      📺 Assistir Videoaula
                    </Button>
                  )
                )}
                <Button
                  variant={isCompleted ? "secondary" : "terciary"}
                  className="w-full mt-2"
                  isLoading={loadingDay}
                  disabled={!user}
                  onClick={async () => {
                    if (!user) return;
                    setLoadingDay(true);
                    await handleToggleDay(dayId, isCompleted);
                    setLoadingDay(false);
                  }}
                >
                  {isCompleted ? "Reabrir tarefa" : "Concluir Tarefa"}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
