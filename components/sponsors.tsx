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
  <TileWrapper numOfPages={9}>
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
                <SponsorLink href="https://noizbord.in">NoizBord</SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/noizbord.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="NoizBord"
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
              <div>Financial Sponsor</div>
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
                width={840}
                height={1620}
                alt="Mitsubishi Electric"
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
              <div>Financial Sponsor</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="https://iocl.com">IndianOil</SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/indian-oil.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Indian Oil"
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
              <div>Digital Marketing Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="https://www.wearebyond.com/">
                  Byond Media
                </SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/byond-media.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Byond Media"
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
              <div>Merchandise Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Star Studio
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/star-studio.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Star Studio"
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
              <div>Bearings Provider</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="https://www.f1bearings.com/">
                  F1 Bearings
                </SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/f1-bearings.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="F1 Bearings"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
      <Tile
        page={6}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>CAA Software Provider</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SponsorLink href="https://airshaper.com/">
                  AirShaper
                </SponsorLink>
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/airshaper.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="AirShaper"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
      <Tile
        page={7}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>Sustainability Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                EcoGen
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/ecogen.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="EcoGen"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
      <Tile
        page={8}
        renderContent={({ progress }) => (
          <SponsorContainer>
            <SponsorLeft progress={progress}>
              <div>Apparel Partner</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Spree Firit
              </div>
            </SponsorLeft>
            <SponsorRight progress={progress}>
              <Image
                src="/assets/sponsors/spree-firit.svg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Spree Firit"
              />
            </SponsorRight>
          </SponsorContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);
export default Sponsors;
