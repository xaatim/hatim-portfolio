import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  link?: string;
  status: "Active" | "Completed" | "In Progress";
}

const projects: Project[] = [
  {
    title: "Beam AgroBot V2",
    description:
      "Fully autonomous mobile manipulator for precision agriculture with ROS2 SLAM navigation, 5-DOF robotic arm, and RGB-D vision pipeline for autonomous crop detection and watering.",
    tech: ["ROS2 Humble", "Nav2", "MoveIt2", "TRAC-IK", "RealSense D435"],
    github: "https://github.com/xaatim/beam_agrobot_v2",
    status: "Active",
  },
  {
    title: "Beam Command Center",
    description:
      "Centralized SaaS platform for the entire Beam Robotics fleet. Multi-tenant authentication, role-based access control, and real-time bi-directional telemetry across all deployed products.",
    tech: ["Next.js 15", "PostgreSQL", "Drizzle ORM", "Socket.io"],
    github: "https://github.com/xaatim/Beam-Command-Center",
    status: "Active",
  },
  {
    title: "Autonomous Surveillance Robot",
    description:
      "Self-navigating security robot with biometric identification. SLAM-based indoor navigation with facial recognition engine, real-time identification, and store-first forensic protocol.",
    tech: ["ROS2 Humble", "SLAM Toolbox", "InsightFace", "LiDAR", "Docker"],
    github: "https://github.com/xaatim/Autonomous_security_robot",
    status: "Active",
  },
  {
    title: "Smart Access Control System",
    description:
      "Industry 4.0 access control and surveillance system with facial recognition and automatic license plate recognition. Distributed ESP32 and Arduino edge nodes with boom gates and solenoid locks.",
    tech: ["Python", "InsightFace", "EasyOCR", "ESP32", "Arduino"],
    github: "https://github.com/xaatim/SmartAccessControl",
    status: "Active",
  },
  {
    title: "Beam Agri-Bot V1",
    description:
      "Field-tested precursor to AgroBot V2. Teleoperated precision agriculture platform using YOLO-World zero-shot detection to identify crops with targeted pump actuation.",
    tech: ["YOLO-World", "OpenCV", "Arduino", "Raspberry Pi"],
    github: "https://github.com/xaatim/Smart-Agricultural-Robot",
    status: "Completed",
  },
  {
    title: "Glove Integrity Testing System (GITS)",
    description:
      "Automated leak detection for medical and laboratory gloves. Pressure decay based leak detector for manufacturing quality control with auto-deflation safety mechanism.",
    tech: ["Arduino", "MPS20N0040D", "HX710B", "L298N"],
    github: "https://github.com/xaatim/Glove-Integrity-Tester",
    status: "Completed",
  },
];

export function Featured() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my robotics, IoT, and autonomous systems projects.
            Each showcases different aspects of hardware innovation and software
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${
                      project.status === "Active"
                        ? "bg-accent/20 text-accent"
                        : project.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border border-accent/30 text-accent bg-accent/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-accent/10 border border-accent/30">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Want to see more?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Check out all my repositories on GitHub, CAD models on GrabCAD, and
            connect with me on LinkedIn for professional collaborations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/xaatim?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-dark transition-colors font-medium"
            >
              <Github className="w-4 h-4" />
              All Repositories
            </a>
            <a
              href="https://grabcad.com/hatim.ahmed.hassan-1/models"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              GrabCAD Models
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
