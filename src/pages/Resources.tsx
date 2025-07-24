// src/pages/Resources.tsx
import { studyData } from "../constants/studyData";
import Card from "../components/Card";

export default function Resources() {
  return (
    <section id="recursos" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {studyData.resources.title}
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-600">
          {studyData.resources.intro}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Canais no YouTube</h3>
          <ul className="space-y-3">
            {studyData.resources.channels.map((c) => (
              <li key={c.name}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 group"
                >
                  <div>
                    <span className="font-semibold text-gray-700">
                      {c.name}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      ({c.category})
                    </span>
                  </div>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Plataformas e Questões</h3>
          <ul className="space-y-3">
            {studyData.resources.platforms.map((p) => (
              <li key={p.name}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 group"
                >
                  <div>
                    <p className="font-semibold text-gray-700">{p.name}</p>
                    <p className="text-sm text-gray-500">{p.description}</p>
                  </div>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
