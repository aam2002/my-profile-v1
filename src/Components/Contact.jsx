import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="scroll-area">
      <div className="text-9xl skill link" id="Contact">
        Contact
      </div>
      <div className=" m-auto flex items-center  justify-center">
        <div className="contactContainer  mb-6 flex justify-evenly items-center flex-col-reverse">
          <div className="contactByIcon flex flex-row mb-10">
            <a
              href="https://www.instagram.com/official_looser_1000/"
              className=" m-0 flex items-center justify-center "
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="svgImg"
                className="black m-0 flex items-center"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CiAgICA8cGF0aCBkPSJNIDE2IDMgQyA4LjgzIDMgMyA4LjgzIDMgMTYgTCAzIDM0IEMgMyA0MS4xNyA4LjgzIDQ3IDE2IDQ3IEwgMzQgNDcgQyA0MS4xNyA0NyA0NyA0MS4xNyA0NyAzNCBMIDQ3IDE2IEMgNDcgOC44MyA0MS4xNyAzIDM0IDMgTCAxNiAzIHogTSAzNyAxMSBDIDM4LjEgMTEgMzkgMTEuOSAzOSAxMyBDIDM5IDE0LjEgMzguMSAxNSAzNyAxNSBDIDM1LjkgMTUgMzUgMTQuMSAzNSAxMyBDIDM1IDExLjkgMzUuOSAxMSAzNyAxMSB6IE0gMjUgMTQgQyAzMS4wNyAxNCAzNiAxOC45MyAzNiAyNSBDIDM2IDMxLjA3IDMxLjA3IDM2IDI1IDM2IEMgMTguOTMgMzYgMTQgMzEuMDcgMTQgMjUgQyAxNCAxOC45MyAxOC45MyAxNCAyNSAxNCB6IE0gMjUgMTYgQyAyMC4wNCAxNiAxNiAyMC4wNCAxNiAyNSBDIDE2IDI5Ljk2IDIwLjA0IDM0IDI1IDM0IEMgMjkuOTYgMzQgMzQgMjkuOTYgMzQgMjUgQyAzNCAyMC4wNCAyOS45NiAxNiAyNSAxNiB6Ij48L3BhdGg+Cjwvc3ZnPg=="
              />
            </a>

            <a
              href="mailto: amansoni20020+work@gmail.com"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="svgImg"
                className="black"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CjxwYXRoIGQ9Ik01NSwxMEg5Yy0yLjIwOSwwLTQsMS43OTEtNCw0djM0YzAsMi4yMDksMS43OTEsNCw0LDRoNDZjMi4yMDksMCw0LTEuNzkxLDQtNFYxNEM1OSwxMS43OTEsNTcuMjA5LDEwLDU1LDEweiBNNTUsNDUuNzM4IEM1NC45NTQsNDcsNTMuOTAxLDQ4LDUyLjYxOCw0OEg0OS41TDUxLDIxTDMyLDMzTDEzLDIybDEuNSwyNmgtMy4xMThDMTAuMDk5LDQ4LDkuMDQ2LDQ3LDksNDUuNzM4VjE2LjI4OSBjMC0xLjI1LDEuMDMtMi4yNjMsMi4zLTIuMjYzaDEuMkwzMiwyOWwxOS41LTE0Ljk3NGgxLjJjMS4yNywwLDIuMywxLjAxMywyLjMsMi4yNjNWNDUuNzM4eiI+PC9wYXRoPgo8L3N2Zz4="
              />
            </a>

            <a
              href=" https://github.com/aam2002"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="svgImg"
                className="black"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CjxwYXRoIGQ9Ik0zMiA2QzE3LjY0MSA2IDYgMTcuNjQxIDYgMzJjMCAxMi4yNzcgOC41MTIgMjIuNTYgMTkuOTU1IDI1LjI4Ni0uNTkyLS4xNDEtMS4xNzktLjI5OS0xLjc1NS0uNDc5VjUwLjg1YzAgMC0uOTc1LjMyNS0yLjI3NS4zMjUtMy42MzcgMC01LjE0OC0zLjI0NS01LjUyNS00Ljg3NS0uMjI5LS45OTMtLjgyNy0xLjkzNC0xLjQ2OS0yLjUwOS0uNzY3LS42ODQtMS4xMjYtLjY4Ni0xLjEzMS0uOTItLjAxLS40OTEuNjU4LS40NzEuOTc1LS40NzEgMS42MjUgMCAyLjg1NyAxLjcyOSAzLjQyOSAyLjYyMyAxLjQxNyAyLjIwNyAyLjkzOCAyLjU3NyAzLjcyMSAyLjU3Ny45NzUgMCAxLjgxNy0uMTQ2IDIuMzk3LS40MjYuMjY4LTEuODg4IDEuMTA4LTMuNTcgMi40NzgtNC43NzQtNi4wOTctMS4yMTktMTAuNC00LjcxNi0xMC40LTEwLjQgMC0yLjkyOCAxLjE3NS01LjYxOSAzLjEzMy03Ljc5MkMxOS4zMzMgMjMuNjQxIDE5IDIyLjQ5NCAxOSAyMC42MjVjMC0xLjIzNS4wODYtMi43NTEuNjUtNC4yMjUgMCAwIDMuNzA4LjAyNiA3LjIwNSAzLjMzOEMyOC40NjkgMTkuMjY4IDMwLjE5NiAxOSAzMiAxOXMzLjUzMS4yNjggNS4xNDUuNzM4YzMuNDk3LTMuMzEyIDcuMjA1LTMuMzM4IDcuMjA1LTMuMzM4LjU2NyAxLjQ3NC42NSAyLjk5LjY1IDQuMjI1IDAgMi4wMTUtLjI2OCAzLjE5LS40MzIgMy42OTdDNDYuNDY2IDI2LjQ3NSA0Ny42IDI5LjEyNCA0Ny42IDMyYzAgNS42ODQtNC4zMDMgOS4xODEtMTAuNCAxMC40IDEuNjI4IDEuNDMgMi42IDMuNTEzIDIuNiA1Ljg1djguNTU3Yy0uNTc2LjE4MS0xLjE2Mi4zMzgtMS43NTUuNDc5QzQ5LjQ4OCA1NC41NiA1OCA0NC4yNzcgNTggMzIgNTggMTcuNjQxIDQ2LjM1OSA2IDMyIDZ6TTMzLjgxMyA1Ny45M0MzMy4yMTQgNTcuOTcyIDMyLjYxIDU4IDMyIDU4IDMyLjYxIDU4IDMzLjIxMyA1Ny45NzEgMzMuODEzIDU3Ljkzek0zNy43ODYgNTcuMzQ2Yy0xLjE2NC4yNjUtMi4zNTcuNDUxLTMuNTc1LjU1NEMzNS40MjkgNTcuNzk3IDM2LjYyMiA1Ny42MSAzNy43ODYgNTcuMzQ2ek0zMiA1OGMtLjYxIDAtMS4yMTQtLjAyOC0xLjgxMy0uMDdDMzAuNzg3IDU3Ljk3MSAzMS4zOSA1OCAzMiA1OHpNMjkuNzg4IDU3LjljLTEuMjE3LS4xMDMtMi40MTEtLjI4OS0zLjU3NC0uNTU0QzI3LjM3OCA1Ny42MSAyOC41NzEgNTcuNzk3IDI5Ljc4OCA1Ny45eiI+PC9wYXRoPgo8L3N2Zz4="
              />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-soni-7478a724a/ "
              className=" m-0 flex items-center justify-center "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                alt="svgImg"
                className="black"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CiAgICA8cGF0aCBkPSJNNDEsNEg5QzYuMjQsNCw0LDYuMjQsNCw5djMyYzAsMi43NiwyLjI0LDUsNSw1aDMyYzIuNzYsMCw1LTIuMjQsNS01VjlDNDYsNi4yNCw0My43Niw0LDQxLDR6IE0xNywyMHYxOWgtNlYyMEgxN3ogTTExLDE0LjQ3YzAtMS40LDEuMi0yLjQ3LDMtMi40N3MyLjkzLDEuMDcsMywyLjQ3YzAsMS40LTEuMTIsMi41My0zLDIuNTNDMTIuMiwxNywxMSwxNS44NywxMSwxNC40N3ogTTM5LDM5aC02YzAsMCwwLTkuMjYsMC0xMCBjMC0yLTEtNC0zLjUtNC4wNGgtMC4wOEMyNywyNC45NiwyNiwyNy4wMiwyNiwyOWMwLDAuOTEsMCwxMCwwLDEwaC02VjIwaDZ2Mi41NmMwLDAsMS45My0yLjU2LDUuODEtMi41NiBjMy45NywwLDcuMTksMi43Myw3LjE5LDguMjZWMzl6Ij48L3BhdGg+Cjwvc3ZnPg=="
              />
            </a>
          </div>
          <div className="contact-form flex flex-col">
            <form
              action="https://formspree.io/f/mvojkndd"
              method="POST"
              className="flex flex-col"
            >
              <h2 className=" text-4xl flex m-4 justify-center ">
                Lets talk
              </h2>
              <input
                type="text"
                name="username"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea
                name="message"
                cols={30}
                rows="6"
                autoComplete="off"
                required
                placeholder="Write a Massage/Feedback for Me"

              ></textarea>
              <input type="submit" value="send" className="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
