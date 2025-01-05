const Education = () => {
  const educations = [
    {
      year_start: 2022,
      year_end: "2025 (expected)",
      institution: "University of Burdwan",
      degree: "B.Sc (Hons.) in Computer Science",
      location: "Burdwan, West Bengal",
    },
    {
      year_start: 2011,
      year_end: 2013,
      institution: "Chittagong Science College",
      degree: "Higher Secondary Certification (H.S.C)",
      gpa: "3.9 out of 5",
      location: "Chittagong",
    },
    {
      year_start: 2008,
      year_end: 2010,
      institution: "Nasirabad Govt. Boys High School",
      degree: "Secondary School Certificate (S.S.C)",
      gpa: "4.63 out of 5",
      location: "Chittagong",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">
        Education
      </h2>
      <div className="relative border-l-4 border-amber-400 pl-8">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="mb-10 ml-4 relative flex flex-col gap-2 before:content-[''] before:absolute before:-left-6 before:top-1.5 before:w-4 before:h-4 before:rounded-full before:bg-amber-400"
          >
            <h3 className="text-lg md:text-2xl font-semibold text-gray-300">
              {edu.degree}
            </h3>
            <p className="text-md text-amber-500">{edu.institution}</p>
            <p className="text-sm text-gray-400">
              {edu.year_start} - {edu.year_end} | {edu.location}
            </p>
            {edu.gpa && <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
