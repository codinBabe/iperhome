"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SecuritySolution: React.FC = () => {
  return (
    <section>
      <div className="security-bg relative w-full h-[80vh] md:h-[70vh] lg:h-[60vh] overflow-hidden flex items-center justify-center text-center">
        <motion.h1
          className="text-white text-[60px] md:leading-tight"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Security Solutions
        </motion.h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="w-full flex flex-col md:flex-row items-center gap-10 py-20">
          <div className="w-full md:w-[50%] h-full rounded-xl overflow-hidden">
            <Image
              src="/images/iper-hero-5.webp"
              alt="Security Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-[46%] space-y-6 neue-font text-[17px] leading-loose">
            <p>
              Smart security solutions leverage advanced technologies to enhance
              the safety and protection of people, assets, and properties. These
              solutions combine various components, such as sensors, cameras,
              access control systems, and analytics, to create intelligent and
              proactive security systems.
            </p>
            <p>
              One key feature of smart security solutions is real-time
              monitoring and alerts. They employ video surveillance cameras with
              advanced analytics capabilities to detect and identify potential
              security threats. These systems can automatically generate alerts
              for suspicious activities, intrusions, or unauthorized access,
              allowing for immediate response and intervention.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 pb-20">
          <div className="md:w-[46%] space-y-6 neue-font text-[17px] leading-loose">
            <p>
              Another aspect of smart security solutions is access control. They
              utilize technologies like biometric identification, smart cards,
              or facial recognition to ensure only authorized individuals can
              access specific areas or resources. Access control systems can
              also track and log entry and exit events, providing a
              comprehensive audit trail for security purposes.
            </p>
            <p>
              Smart security solutions also incorporate automation and remote
              management capabilities. They can integrate with other smart
              devices, such as motion sensors, door locks, and alarm systems, to
              automate security processes. For example, smart security systems
              can arm or disarm alarms, lock or unlock doors, and adjust
              lighting based on predefined rules or remote commands.
            </p>
          </div>
          <div className="w-full md:w-[50%] h-full rounded-xl overflow-hidden">
            <Image
              src="/images/security-solution-1.webp"
              alt="Security Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 pb-20">
          <div className="w-full md:w-[50%] h-full rounded-xl overflow-hidden">
            <Image
              src="/images/security-solution-2.webp"
              alt="Audio Visual Solution"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-[46%] space-y-6 neue-font text-[17px] leading-loose">
            <p>
              Furthermore, smart security solutions enable centralized
              monitoring and management. Through a unified platform or software,
              security personnel can monitor and control multiple security
              systems and devices from a single interface. This simplifies
              operations, improves response times, and enhances situational
              awareness.
            </p>
            <p>
              Data analytics and insights are also integral to smart security
              solutions. By analyzing data from various sources, such as
              security cameras, access logs, and environmental sensors, these
              solutions can identify patterns, detect anomalies, and provide
              valuable insights for improving security measures and
              decision-making.
            </p>
            <p>
              Additionally, smart security solutions may incorporate features
              like video analytics, facial recognition, and object tracking to
              enhance surveillance and threat detection capabilities. These
              technologies enable intelligent video analysis, behavior
              recognition, and proactive identification of potential risks or
              incidents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolution;
