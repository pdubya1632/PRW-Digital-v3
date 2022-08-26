import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SITE_YEAR,
} from "../routes/config/constants";
import { GithubIcon } from "./GithubIcon";
import { TwitterIcon } from "./TwitterIcon";
import { LinkedInIcon } from "./LinkedInIcon";

export const AppFooter = () => {
  return (
    <footer className="footer items-center p-7 md:fixed md:bottom-0 lg:fixed lg:bottom-0">
      <div className="grid-flow-col items-center">
        <p>copyright &copy; {SITE_YEAR} - hello@prw.digital</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href={SOCIAL_GITHUB}>{GithubIcon}</a>
        <a href={SOCIAL_LINKEDIN}>{LinkedInIcon}</a>
        <a href={SOCIAL_TWITTER}>{TwitterIcon}</a>
      </div>
    </footer>
  );
};
