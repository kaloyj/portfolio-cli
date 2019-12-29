/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { dirtyWhiteColor, accentColor } from "../../global-styles/colors";

function EmailForm() {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        flex: 0 0 calc(100% - 4px);
        margin-left: 2px;
        margin-top: 6%;
      `}
    >
      <h3>Reach out via email.</h3>
      <form
        css={css`
          flex: 0 0 100%;
          display: flex;
          flex-flow: row wrap;
          margin-top: 2%;

          label {
            font-weight: 600;
            flex: 0 0 100%;
            margin-bottom: 1%;
          }

          input {
            margin-bottom: 3%;
            border-radius: 5px;
            height: 35px;
            padding: 5px;
          }

          textarea {
            height: 200px;
            border-radius: 5px;
            padding: 10px;
          }

          input,
          textarea {
            flex: 0 0 100%;
            background-color: ${dirtyWhiteColor};
            border: none;
            resize: none;
          }
        `}
      >
        <label htmlFor="user-email">Your Email</label>
        <input id="user-email" name="user-email"></input>

        <label htmlFor="email-subject">Subject</label>
        <input id="email-subject" name="email-subject"></input>

        <label htmlFor="email-body">Body</label>
        <textarea id="email-body" name="email-body"></textarea>

        <button
          css={css`
            border: none;
            background-color: ${accentColor};
            font-weight: 600;
            color: ${dirtyWhiteColor};
            width: 70px;
            height: 35px;
            border-radius: 5px;
            margin-top: 4%;
          `}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default EmailForm;
