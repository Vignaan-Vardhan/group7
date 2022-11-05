import Navbar from "../Navabr/Navbar";
import Sidebar from "../Sidebar/Sidebar";
const Groups = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />
        <div
          style={{
            width: "400px",
          }}
        ></div>
        <div>
          <div
            className="container"
            style={{
              margin: "auto",
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: "3fr 3fr 3fr",
              gap: "10px",
              backgroundColor: "#F0F2F5",
              color: "Black",
            }}
          >
            <div
              style={{
                border: "1px solid #F0F2F5",
                padding: "10px",
                background: "#fff",
              }}
            >
              <img
                src="https://di-uploads-pod19.dealerinspire.com/bentleyofaustin/uploads/2020/10/download.png"
                alt=""
                className="img"
                width="300px"
              />
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Bentley Group
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "10px 0px",
                    border: "transparent",
                    background: "#F0F2F5",
                  }}
                >
                  Join Group
                </button>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #F0F2F5",
                padding: "10px",
                background: "#fff",
              }}
            >
              <img
                src="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png"
                alt=""
                className="img"
                width="300px"
              />
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Porsche Group
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "10px 0px",
                    border: "transparent",
                    background: "#F0F2F5",
                  }}
                >
                  Join Group
                </button>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #F0F2F5",
                padding: "10px",
                background: "#fff",
              }}
            >
              <img
                src="https://1000logos.net/wp-content/uploads/2018/03/Symbol-Lamborghini.jpg"
                alt=""
                className="img"
                width="300px"
              />
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Lamborghini Group
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "10px 0px",
                    border: "transparent",
                    background: "#F0F2F5",
                  }}
                >
                  Join Group
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Groups;