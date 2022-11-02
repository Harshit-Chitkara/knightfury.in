import Image from "next/image";
import React from "react";
import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
  WorkLink,
} from "./tile";

export const WorkContainer: React.FC<any> = ({ children }) => (
  <div className="grid grids-cols-1 lg:grid-cols-2 w-full min-hscreen">
    {children}
  </div>
);

export const WorkBackground: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-black h-[30vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen"></div>
  </div>
);

export const WorkLeft: React.FC<{ progress: number; children: any }> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<{
  progress: number;
  children: any;
}> = ({ progress, children }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 2 * 50);
  return (
    <div
      className="flex flex-1 lg:items-center justify-center h-screen"
      style={{ transform: `transalteY(${translateY}px)` }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-10 px-10 md:px-0">
        {children}
      </div>
    </div>
  );
};

const Works = () => (
  <TileWrapper numOfPages={6}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight underline underline-offset-8 decoration-2">
                Dhanika Bhayana
              </div>
              <div className="mt-4 text-2xl md:text-3xl">Team Manager</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/team/knightfury_faces_dhanika.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="dhanika"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight underline underline-offset-8 decoration-2">
                Harshit Chitkara
              </div>
              <div className="mt-4 text-2xl md:text-3xl">
                Sponsorship Manager
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/team/knightfury_faces_harshit.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="harshit"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight underline underline-offset-8 decoration-2">
                Aarav Khattar
              </div>
              <div className="mt-4 text-2xl md:text-3xl">Design Engineer</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/team/knightfury_faces_aarav.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="aarav"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight underline underline-offset-8 decoration-2">
                Harshil Chitkara
              </div>
              <div className="mt-4 text-2xl md:text-3xl">Graphic Designer</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/team/knightfury_faces_harshil.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="harshil"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={4}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight underline underline-offset-8 decoration-2">
                Prabuddh A. Sinha
              </div>
              <div className="mt-4 text-2xl md:text-3xl">
                Manufacturing Engineer
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/team/knightfury_faces_prabuddh.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="prabuddh"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={5}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight underline underline-offset-8 decoration-2">
                Arjanvir Singh
              </div>
              <div className="mt-4 text-2xl md:text-3xl">Resource Manager</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/team/knightfury_faces_arjanvir.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="arjanvir"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
