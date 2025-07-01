import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import TrueFocus from "./BitsUI/TrueFocus/TrueFocus";

interface RecentProjectsProps {
  id?: string;
}

const RecentProjects: React.FC<RecentProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="relative w-full py-16">
      <div className="absolute inset-0 dark:bg-transparent bg-theme-neutral-100/30 backdrop-blur-3xl"></div>
      <div
        id="projects"
        className="relative py-20 flex flex-col items-center lg:gap-[20px] gap-[100px] text-center scroll-mt-24"
      >
        <h1 className="heading">
          <span className="text-theme-neutral-900 dark:text-white">
            A small selection of
          </span>{" "}
          <div className="text-theme-yellow-600 dark:text-theme-yellow-600">
            <TrueFocus
              sentence="Recent Projects"
              manualMode={false}
              blurAmount={2.5}
              borderColor="rgb(234, 179, 8)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-40 mt-5 md:gap-y-40 lg:gap-y-8 gap-y-[200px] sm:gap-y-40">
          {projects.map((item) => (
            <div
              className="lg:min-h-[35rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <CardContainer className="inter-var">
                <CardBody
                  className="relative group/card 
                  dark:hover:shadow-2xl dark:hover:shadow-theme-primary-500/[0.1] 
                  dark:bg-theme-yellow-900/10 bg-theme-yellow-50/80 
                  dark:border-theme-neutral-300/[0.2] border-theme-neutral-200/[0.1] 
                  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border
                  backdrop-blur-sm transition-all duration-300
                  hover:shadow-xl dark:hover:border-theme-neutral-300/[0.3] hover:border-theme-neutral-200/[0.2]"
                >
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-theme-neutral-800 dark:text-white/90"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-theme-neutral-600 dark:text-theme-neutral-300 text-sm max-w-sm mt-2"
                  >
                    {item.des}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={item.img}
                      alt="thumbnail"
                      className="h-60 w-full object-cover rounded-xl 
                        group-hover/card:shadow-xl transition-all duration-300
                        dark:border-theme-neutral-300/[0.1] border-theme-neutral-200/[0.1] border"
                    />
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="flex flex-col justify-between mt-7 mb-3 h-full">
                      <div className="flex flex-row items-center justify-center w-full gap-4">
                        {item.languages.map((tech, index) => (
                          <div key={index} className="relative group/tooltip">
                            <img
                              src={tech.image}
                              alt={tech.name}
                              className="h-10 w-10 object-cover rounded-full 
                                p-[2px] transition-all duration-300
                                dark:bg-white/[0.1] bg-black/[0.05]
                                dark:border-white/[0.2] border-black/[0.1] border
                                group-hover/tooltip:scale-110
                                group-hover/tooltip:dark:border-white/[0.3]
                                group-hover/tooltip:border-black/[0.2]"
                            />
                            <div
                              className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                              px-3 py-1 bg-theme-neutral-900/90 dark:bg-theme-neutral-100/90 
                              rounded-md text-xs text-white dark:text-theme-neutral-900
                              opacity-0 group-hover/tooltip:opacity-100 transition-opacity
                              whitespace-nowrap pointer-events-none"
                            >
                              {tech.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardItem>

                  {/* Add GitHub link button */}
                  <CardItem translateZ="120" className="w-full mt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2 px-4 bg-black/10 dark:bg-white/10 
                        hover:bg-black/20 dark:hover:bg-white/20 
                        rounded-lg text-center font-medium 
                        text-theme-neutral-800 dark:text-white/90
                        transition-all duration-300
                        border border-black/10 dark:border-white/10
                        hover:border-black/20 dark:hover:border-white/20"
                    >
                      View on GitHub
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
