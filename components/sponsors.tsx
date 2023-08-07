import React from "react";
import Image from "next/image";
import { TileBackground, TileContent, TileWrapper, Tile } from "./tile";
import {
  SponsorBackground,
  SponsorContainer,
  SponsorLeft,
  SponsorRight,
  SponsorLink,
} from "./sponsor";

const Sponsors = () => (
  <TileWrapper numOfPages={6}>
    <TileBackground>
      <SponsorBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>Title Sponsor</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="https://www.mitsubishielectric.com">
                  Mitsubishi Electric
                </SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/mitsubishi-electric.svg"
                layout="responsive"
                width={840 / 3}
                height={1620 / 3}
                alt="Mitsubishi Electric"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>Publication Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="http://pragyaprakashan.com">
                  Pragya Prakashan
                </SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/pragya-prakashan.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Pragya Prakashan"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>Educational Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="https://www.yep.education">
                  Yep Education
                </SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/yep-education.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Yep Education"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>Technological Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="https://orangeeducation.in">
                  Orange Education
                </SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/orange-education.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Orange Education"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
      <Tile
        page={4}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>Educational Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="http://seedtoplant.in">
                  Seed to Plant
                </SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/seed-to-plant.jpg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Seed to Plant"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
      <Tile
        page={5}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>Educational Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="https://maped.com">Maped</SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/maped.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Maped"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);
export default Sponsors;
