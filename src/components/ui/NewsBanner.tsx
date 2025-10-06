import { newsItems } from '@/data/modules';

export default function NewsBanner() {
  return (
    <section className="bg-white py-12 mt-20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <h3 className="text-3xl font-bold flex items-center gap-3 text-[#1351B4]">
            📰 Principais Notícias
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4 border-[#1351B4] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-[#1351B4] font-bold text-sm uppercase tracking-wide">
                {news.date}
              </span>
              <h4 className="text-gray-800 font-semibold text-lg mt-2 mb-3 leading-tight">
                {news.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {news.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}