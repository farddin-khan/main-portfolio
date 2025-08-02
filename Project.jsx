
const projects = [
  {
    title: 'Business Growth',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/020/069/736/small/global-business-growth-analysis-and-asset-investment-chart-business-and-finance-up-arrow-holographic-economic-chart-global-economic-trend-analysis-financial-graph-analysis-on-virtual-screen-photo.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero recusandae amet ea dicta, distinctio asperiores beatae nisi temporibus laudantium quas.'
  },
  // You can add more unique projects here
  {
    title: 'Business Growth',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/020/069/736/small/global-business-growth-analysis-and-asset-investment-chart-business-and-finance-up-arrow-holographic-economic-chart-global-economic-trend-analysis-financial-graph-analysis-on-virtual-screen-photo.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero recusandae amet ea dicta, distinctio asperiores beatae nisi temporibus laudantium quas.'
  },
  {
    title: 'Business Growth',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/020/069/736/small/global-business-growth-analysis-and-asset-investment-chart-business-and-finance-up-arrow-holographic-economic-chart-global-economic-trend-analysis-financial-graph-analysis-on-virtual-screen-photo.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero recusandae amet ea dicta, distinctio asperiores beatae nisi temporibus laudantium quas.'
  },
  {
    title: 'Business Growth',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/020/069/736/small/global-business-growth-analysis-and-asset-investment-chart-business-and-finance-up-arrow-holographic-economic-chart-global-economic-trend-analysis-financial-graph-analysis-on-virtual-screen-photo.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero recusandae amet ea dicta, distinctio asperiores beatae nisi temporibus laudantium quas.'
  },
  {
    title: 'Business Growth',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/020/069/736/small/global-business-growth-analysis-and-asset-investment-chart-business-and-finance-up-arrow-holographic-economic-chart-global-economic-trend-analysis-financial-graph-analysis-on-virtual-screen-photo.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero recusandae amet ea dicta, distinctio asperiores beatae nisi temporibus laudantium quas.'
  },
  {
    title: 'Business Growth',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/020/069/736/small/global-business-growth-analysis-and-asset-investment-chart-business-and-finance-up-arrow-holographic-economic-chart-global-economic-trend-analysis-financial-graph-analysis-on-virtual-screen-photo.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero recusandae amet ea dicta, distinctio asperiores beatae nisi temporibus laudantium quas.'
  },
];

function Project() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center py-10">
      <h1 className="font-serif text-5xl md:text-6xl text-rose-400 font-extrabold tracking-wide mb-12 drop-shadow-lg animate-pulse text-center" id="Project">
        MY PROJECTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border-2 shadow-2xl border-gray-500 rounded-xl p-6 bg-white flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-rose-400 h-[400px]"
          >
            <img
              className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
              src={project.img}
              alt={project.title}
            />
            <h2 className="text-2xl font-bold text-rose-400 mb-2 text-center">{project.title}</h2>
            <p className="text-gray-700 text-center">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project