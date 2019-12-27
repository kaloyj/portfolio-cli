/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Card from "./Card";
import Socials from "./Socials";
import EmailForm from "./EmailForm";

function Contacts({ animationDone }: { animationDone: boolean }) {
  return (
    <Card cardTitle="Contact" animationDone={animationDone}>
      <div className="flex-1" css={css``}>
        <Socials />
        <EmailForm />
      </div>
    </Card>
  );
}

export default Contacts;
