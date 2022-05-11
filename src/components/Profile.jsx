import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid'

const Profile = () => {
  return (
      <div
          name="profile"
          className="w-full h-screen bg-[#0a192f] text-textl"
      >
          <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                  <div className=" pb-8 pl-4">
                      <p className="text-4xl font-bold inline border-b-4 border-rose">
                          Profile
                      </p>
                  </div>
              </div>
              <div className="max-w-[1000px] w-full flex justify-center">
                  <ul className="flex flex-col">
                      <li className="flex pb-2">
                          <i>
                              <ChevronRightIcon className="h-5 w-5 text-rose" />
                          </i>
                          <p className="flex">
                              Knowledge of HTML, JS, CSS, React, Firebase,
                              NodeJS, ExpressJS, Nunjucks and MongoDB.
                          </p>
                      </li>
                      <li className="flex pb-2">
                          <i>
                              <ChevronRightIcon className="h-5 w-5 text-rose" />
                          </i>
                          <p>
                              Entry-level data analytics professional; ongoing
                              Google Data Analytics Professional Certificate.
                              Understanding and proficiency of platforms for
                              effective data analyses and data visualization,
                              including SQL, spreadsheets, Excel and Google
                              Docs.
                          </p>
                      </li>
                      <li className="flex pb-2">
                          <i>
                              <ChevronRightIcon className="h-5 w-5 text-rose" />
                          </i>
                          <p>
                              Good communication,organizational, and analytical
                              skills.
                          </p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  );
};

export default Profile;