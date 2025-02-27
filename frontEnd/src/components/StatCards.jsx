// Copyright 2025 LeandroGiovani

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const StatCards = () => {
  return (
    <div id="divCards">
        <div role="alert" className="success fixed z-50 left-1/2 transform translate-x-[-50%] translate-y-[-100%] bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out">
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-7 w-7 max-md:h-5 max-md:w-5 flex-shrink-0 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <p className="text-sm font-semibold max-md:text-xs">E-mail enviado com sucesso!</p>
        </div>

        <div role="alert" className="error fixed z-50 left-1/2 transform translate-x-[-50%] translate-y-[-100%] bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out">
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-7 w-7 max-md:h-5 max-md:w-5 flex-shrink-0 mr-2 text-red-600" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <p className="text-sm font-semibold max-md:text-xs">Algo deu errado! Não foi possível enviar seu e-mail.</p>
        </div>
    </div>
  );
}

export default StatCards;
