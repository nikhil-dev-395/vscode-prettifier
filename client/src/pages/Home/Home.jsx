import React from "react";
import CodeBox from "../../components/Code/CodeBox";

const Home = () => {
  return (
    <>
      <section className="w-full h-auto min-h-screen text-black  pt-10 font-mono bg-white ">
        <div className=" max-w-[1320px] mx-auto max-h-screen w-[90%] px-9 ">
          <h1 className="text-xl capitalize  py-5 md:max-w-[60%] text-indigo-600 ">
          
            make your vscode more beautiful by using css and js custom loader
            vscode extension 🚀🚀🚀
          </h1>

          <ul className="pt-10 flex md:flex-col flex-wrap md:flex-nowrap max-w-[1320px] gap-y-11 mx-auto w-full">
            {/* Install Custom CSS and JS Loader */}
            <li className="md:flex ">
              <div className="flex gap-x-7 text-[16px]">
                <span>[1]</span>
                <div>
                  <h3 className="pb-3">
                    Install{" "}
                    <span className="font-bold capitalize">
                      'Custom CSS and JS Loader'
                    </span>
                  </h3>
                  <p className="md:w-[60%] capitalize text-gray-700">
                    &gt; Install the VSCode extension that allows us to
                    customize VSCode as needed.
                  </p>
                </div>
              </div>

              {/* Copy Code Box */}
              <CodeBox
                Code="code --install-extension be5invis.vscode-custom-css"
                CodingLanguage="javascript"
                titleOfCode="Terminal"
              />
            </li>

            {/* Install Prettier and Catppuccin Icon Theme */}
            <li className="md:flex mt-6">
              <div className="flex gap-x-7 text-[16px]">
                <span>[2]</span>
                <div>
                  <h3 className="pb-3">
                    Install{" "}
                    <span className="font-bold capitalize">
                      'Prettier and Catppuccin Icon Theme'
                    </span>
                  </h3>
                  <p className="md:w-[60%] capitalize text-gray-700">
                    &gt; Install VSCode extensions for formatting, design, and
                    navigation in explorer.
                  </p>
                </div>
              </div>

              {/* Copy Code Box */}
              <CodeBox
                Code="code --install-extension esbenp.prettier-vscode && code --install-extension catppuccin.catppuccin-vsc"
                CodingLanguage="javascript"
                titleOfCode="Terminal"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
