import { ExternalLink } from "lucide-react";

const designProjects = [
  {
    id: 1,
    title: "Social Media Kit",
    description:
      "A creative set of social media graphics designed for a product launch and brand awareness campaign.",
    image: "/projects/Creatives_Poster.png", // Replace with your actual image
    tags: ["Instagram", "Post Design", "Branding"],
    driveUrl: "https://drive.google.com/drive/folders/1z5kOo3LCwb3625Ovvo8NIaugsABCE6VB?usp=sharing", // Replace with your Drive link
  },
  {
    id: 2,
    title: "Recipe Book",
    description:
      "Designed a healthy cookbook published under Anemia Mukt Manav Rachna Initiative",
    image: "/projects/Recipe_Book_Poster.jpg", // Replace with your actual image
    tags: ["Book Design", "Article Design", "Print"],
    driveUrl: "https://drive.google.com/file/d/1mWiLQlIiK5QThQD8OJFhqRrvNqjpWEDN/view",
  },
  {
    id: 3,
    title: "Editorial Design Projects",
    description:
      "Includes layouts and designs for the Karmayogi Magazine - blending strong typography, layout, and visual storytelling for print.",
    image: "/projects/Karmayogi_Poster.png", // Replace with a combined or symbolic image
    tags: ["Editorial", "Typography", "Print Design"],
    driveUrl: "https://drive.google.com/drive/u/0/folders/1dAGkT6-gCDeSaxh0KUfvI-Vk3FaZH_w_",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Design Work</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A glimpse into some of my recent graphic design projects—crafted to combine creativity with clarity across print and digital platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-start items-center">
                  <a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
