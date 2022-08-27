import { Link } from "@remix-run/react";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "./Icons";
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SITE_YEAR,
} from "../config/constants";

export const AppFooter = () => {
  return (
    <footer className="footer items-center p-7 border-t-4">
      <div className="grid-flow-col items-center">
        <p>Copyright &copy; {SITE_YEAR} - hello@prw.digital</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to={SOCIAL_GITHUB}>{GithubIcon()}</Link>
        <Link to={SOCIAL_LINKEDIN}>{LinkedInIcon()}</Link>
        <Link to={SOCIAL_TWITTER}>{TwitterIcon()}</Link>
      </div>
    </footer>
  );
};
