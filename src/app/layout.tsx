import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./globals.css";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Next.js app",
};

// Tentar utilizar essas particulas no portifolio
const Particulas = () => {
  return (
    <div style={{ background: 'white', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#ffffff' // Cor de fundo branca
            }
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#000000' // Cor das partículas preta
            },
            shape: {
              type: 'circle'
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000000',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.className} p-8 h-dvh`}>
        <div className="bg-cover bg-no-repeat relative box-border bg-black-white m-42 w-full h-full border-2 border-black p-12">
          {children}
        </div>
      </body>
    </html>
  );
}
