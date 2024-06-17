const experiencelist = [
  {
    title: "Freelacing",
    company: "",
    timeline: "Y23",
    present: true,
  },
  {
    title: "Junior Developer",
    company: "Branding Pioneers",
    timeline: "Y22",
  },
];

export default function Experience() {
  return (
    <section>
      <div className="mt-16">
        <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
        <ol className="relative border-s border-gray-200">
          {experiencelist.map((item, i) => (
            <li key={i} className="mb-10 ms-4">
              <div
                className={`absolute w-3 h-3 ${item.present ? 'bg-gray-800' : 'bg-gray-200'} rounded-full mt-1.5 -start-1.5 border`}
              ></div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                  {item.title}
                </div>
                {item.present ? <div className="inline-block uppercase text-xs rounded-sm px-1 py-0 pt-px border border-gray-800 bg-gray-800 text-white">present</div> : ''}
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                {item.company} ({item.timeline})
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
