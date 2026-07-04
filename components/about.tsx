import { BookOpen, Code2, Cpu, Target, Wrench, Zap } from "lucide-react";
import Image from "next/image";

export function About() {
  const skillCategories = [
    {
      category: "Robotics & Motion Planning",
      items: [
        "ROS2 Humble",
        "Nav2",
        "MoveIt2",
        "TRAC-IK",
        "SLAM Toolbox",
        "Gazebo",
      ],
      icon: Zap,
    },
    {
      category: "Perception & Computer Vision",
      items: [
        "OpenCV",
        "YOLO-World",
        "InsightFace",
        "RealSense D435",
        "LiDAR Mapping",
      ],
      icon: Code2,
    },
    {
      category: "Programming Languages",
      items: ["Python", "C++", "C", "Bash", "Linux", "TypeScript"],
      icon: Cpu,
    },
    {
      category: "Embedded & IoT",
      items: [
        "Arduino",
        "ESP32",
        "Raspberry Pi",
        "Jetson Nano",
        "MQTT",
        "PlatformIO",
      ],
      icon: Wrench,
    },
    {
      category: "Design & Manufacturing",
      items: [
        "SolidWorks (CSWA)",
        "FDM 3D Printing",
        "CAD Design",
        "Technical Drawing",
      ],
      icon: BookOpen,
    },
    {
      category: "Web & Cloud",
      items: ["Next.js 15", "PostgreSQL", "Socket.io", "Docker", "Drizzle ORM"],
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional background and technical expertise
          </p>
        </div>

        {/* Main About Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative h-96 lg:h-full min-h-96 lg:min-h-screen flex items-center">
            <Image
              src="/hatim-2.png"
              alt="Hatim Ahmed Hassan"
              fill
              className="object-cover rounded-xl"
              style={{ objectPosition: "center 25%" }}
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-accent font-medium mb-2">
                Professional Profile
              </p>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                B.Eng Mechanical Engineer • Certified SolidWorks Associate
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I design and build autonomous robotic systems end to end, from
                mechanical structure and embedded firmware through to ROS2
                navigation and AI-based perception. I hold a B.Eng in Mechanical
                Engineering from Universiti Tun Hussein Onn Malaysia (UTHM) and
                am a Certified SolidWorks Associate (CSWA).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I&apos;m the founder of{" "}
                <span className="text-accent font-semibold">Beam Robotics</span>
                , where every project is developed as a real product rather than
                a standalone exercise. Each one is registered on a centralized
                platform for monitoring and control.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing a Master&apos;s in Robotics or Autonomous
                Systems with focus on multi-robot coordination and
                field-deployed autonomy. Committed to open-source development
                and advancing the robotics field.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/hatim-ahmed-713214194/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-dark transition-colors font-medium"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://grabcad.com/hatim.ahmed.hassan-1/models"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
              >
                View CAD Models
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Technical Skills
            </h3>
            <p className="text-muted-foreground">
              Core competencies across robotics, software, and hardware
              engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((skillGroup) => {
              const IconComponent = skillGroup.icon;
              return (
                <div
                  key={skillGroup.category}
                  className="p-6 rounded-xl border border-border bg-card/50 hover:border-accent transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <IconComponent className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-foreground">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl border border-border bg-accent/5 hover:bg-accent/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">
              Autonomous Systems
            </h4>
            <p className="text-muted-foreground">
              Building robots with advanced navigation, SLAM, and
              decision-making capabilities
            </p>
          </div>

          <div className="p-8 rounded-xl border border-border bg-accent/5 hover:bg-accent/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">
              Hardware Innovation
            </h4>
            <p className="text-muted-foreground">
              Designing PCBs, integrating sensors, and engineering mechanical
              systems
            </p>
          </div>

          <div className="p-8 rounded-xl border border-border bg-accent/5 hover:bg-accent/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">
              Real-World Solutions
            </h4>
            <p className="text-muted-foreground">
              Solving practical problems in agriculture, security, and
              industrial automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
