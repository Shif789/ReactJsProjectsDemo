import React from "react";
import { LastNameContext, UserConsumer } from "./userContext";

export default function ComponentG() {
  return (
    <UserConsumer>
      {(username) => (
        <LastNameContext.Consumer>
          {(lastName) => (
            <>
              <h1>
                Hello {username} {lastName} from Component G
              </h1>
            </>
          )}
        </LastNameContext.Consumer>
      )}
    </UserConsumer>
  );
}
