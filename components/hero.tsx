import Image from "next/image";
import hatimImage1 from "../public/hatim-1.png";

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-accent font-medium">
                Mechanical Engineer • Robotics & IoT Developer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Building Robots That <span className="text-accent">Work</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I design and build autonomous robotic systems end to end, from
                mechanical structure and embedded firmware through to ROS2
                navigation and AI-based perception. Founder of Beam Robotics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#projects"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent-dark transition-colors text-center"
              >
                View My Work
              </a>
              <a
                href="https://github.com/xaatim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors text-center"
              >
                GitHub Profile
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:xayari229@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  xayari229@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p className="text-foreground">kenya</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96 lg:min-h-screen flex items-center">
            <div className="relative w-full h-full max-h-96 lg:max-h-none">
              <Image
                src={hatimImage1}
                alt="Hatim Ahmed Hassan - Robotics Engineer"
                fill
                className="object-cover rounded-xl"
                className="object-cover rounded-xl grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
