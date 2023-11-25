export default function Chatbot() {
  return (
    <>
      <section>
        <div id="chatbot" class="main-card collapsed ">
          <button id="chatbot_toggle">
            <div>
              <img alt="" src={require("../Components/images/rBuddy.png")} />
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: "none" }}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                style={{ color: "#000054" }}
              />
            </svg>
          </button>
          <div class="main-title">
            <div>
              <img alt="" src={require("../Components/images/rBuddy.png")} />
            </div>
            <span>rBuddy</span>
          </div>
          <div class="chat-area" id="message-box"></div>
          <div class="line"></div>
          <div class="input-div">
            <input
              class="input-message"
              name="message"
              type="text"
              id="message"
              placeholder="Type your message ..."
            />
            <button class="input-send" onclick="send()">
              <svg style={{ width: "24px", height: "24px" }}>
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* <script>
         var running = false;
            function send() {
            if (running == true) return;
            var msg = document.getElementById("message").value;
            if (msg == "") return;
            running = true;
            addMsg(msg);
            //DELEAY MESSAGE RESPOSE Echo
            window.setTimeout(addResponseMsg, 1000, msg);
            }
            function addMsg(msg) {
            var div = document.createElement("div");
            div.innerHTML =
                "<span style='flex-grow:1'></span><div class='chat-message-sent'>" +
                msg +
                "</div>";
            div.className = "chat-message-div";
            document.getElementById("message-box").appendChild(div);
            //SEND MESSAGE TO API
            document.getElementById("message").value = "";
            document.getElementById("message-box").scrollTop = document.getElementById(
                "message-box"
            ).scrollHeight;
            }
            function addResponseMsg(msg) {
            var div = document.createElement("div");
            div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
            div.className = "chat-message-div";
            document.getElementById("message-box").appendChild(div);
            document.getElementById("message-box").scrollTop = document.getElementById(
                "message-box"
            ).scrollHeight;
            running = false;
            }
            document.getElementById("message").addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                send();
            }
            });
            document.getElementById("chatbot_toggle").onclick = function () {
                if (document.getElementById("chatbot").classList.contains("collapsed")) {
                document.getElementById("chatbot").classList.remove("collapsed")
                document.getElementById("chatbot_toggle").children[0].style.display = "none"
                document.getElementById("chatbot_toggle").children[1].style.display = ""
                setTimeout(addResponseMsg,1000,"Hi")
                }
                else {
                document.getElementById("chatbot").classList.add("collapsed")
                document.getElementById("chatbot_toggle").children[0].style.display = ""
                document.getElementById("chatbot_toggle").children[1].style.display = "none"
                }
            }
      </script> */}
    </>
  );
};