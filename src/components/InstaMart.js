import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border-gray-100 border-2 bg-gray-200 m-5 p-2">
      <h2 className="font-bold">{title}</h2>
      <p
        onClick={() => {
          setIsVisible(isVisible ? false : true);
        }}
      >
        {isVisible ? (
          <>
            Hide <p>{desc}</p>
          </>
        ) : (
          "Show"
        )}
      </p>
    </div>
  );
};
const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  const loremipsum = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining
  essentially unchanged. It was popularised in the 1960s with the release
  of Letraset sheets containing Lorem Ipsum passages, and more recently
  with desktop publishing software like Aldus PageMaker including versions
  of Lorem Ipsum.`;
  return (
    <>
      <h1 className="m-5 p-2 text-2xl font-bold">InstaMart</h1>

      <Section
        title={"About Instamart"}
        desc={loremipsum}
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        title={"Team Instamart"}
        desc={loremipsum}
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Section
        title={"Careers"}
        desc={loremipsum}
        isVisible={visibleSection === "careers"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "careers" ? "" : "careers")
        }
      />
    </>
  );
};
export default InstaMart;
