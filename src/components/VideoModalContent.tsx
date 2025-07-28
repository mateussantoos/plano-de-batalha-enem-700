interface VideoModalContentProps {
  videoUrl: string;
  videoTitle: string;
  explanation: string;
}

export default function VideoModalContent({
  videoUrl,
  videoTitle,
  explanation,
}: VideoModalContentProps) {
  // Extrair o ID do vídeo do YouTube
  const getVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-black text-gray-800 mb-2">{videoTitle}</h3>
        <div className="w-16 h-1 bg-duo-green-dark mx-auto rounded-full"></div>
      </div>

      {videoId ? (
        <div className="mb-6">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-6 text-center">
          <p className="text-red-600 font-semibold">❌ URL do vídeo inválida</p>
        </div>
      )}

      <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-lg">
        <h4 className="text-xl font-black text-gray-800 mb-4 uppercase tracking-wide">
          📚 Sobre este conteúdo
        </h4>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">{explanation}</p>
        </div>
      </div>
    </div>
  );
}
