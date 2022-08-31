import { a } from "@remix-run/react";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "./icons";
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SITE_YEAR,
} from "../config/constants";

export const AppFooter = () => {
  return (
    <footer className="footer items-center border-t-4 p-7">
      <div className="grid-flow-col items-center">
        <p>Copyright &copy; {SITE_YEAR} - hello@prw.digital</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href={SOCIAL_GITHUB} target="_blank" rel="noreferrer">
          {GithubIcon()}
        </a>
        <a href={SOCIAL_LINKEDIN} target="_blank" rel="noreferrer">
          {LinkedInIcon()}
        </a>
        <a href={SOCIAL_TWITTER} target="_blank" rel="noreferrer">
          {TwitterIcon()}
        </a>
      </div>
    </footer>
  );
};
