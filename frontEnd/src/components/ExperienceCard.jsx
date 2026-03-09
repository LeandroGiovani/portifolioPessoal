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

const ExperienceCard = ({ role, company, companyLogo, period, description, tags, i }) => {

    const periodParts = period.split("—").map(p => p.trim());

    const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

    const parseDate = (dateStr) => {
        if (!dateStr || dateStr.toLowerCase() === "presente") return new Date();

        const [month, year] = dateStr.split("/");
        const monthIndex = parseInt(month) - 1;

        return new Date(year, monthIndex);
    };

    const formatDate = (dateStr) => {
        if (!dateStr || dateStr.toLowerCase() === "presente") return "Presente";

        const [month, year] = dateStr.split("/");
        const monthIndex = parseInt(month) - 1;

        return `${months[monthIndex].charAt(0).toUpperCase() + months[monthIndex].slice(1)} de ${year}`;
    };

    const startDate = parseDate(periodParts[0]);
    const endDate = parseDate(periodParts[1]);

    const totalMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    const years = Math.floor(totalMonths / 12);
    const monthsRemaining = totalMonths % 12;

    let duration = "";

    if (years > 0) {
        duration += `${years} ${years === 1 ? "ano" : "anos"}`;
    }

    if (monthsRemaining > 0) {
        if (duration) duration += " e ";
        duration += `${monthsRemaining} ${monthsRemaining === 1 ? "mês" : "meses"}`;
    }

    if (!duration) duration = "0 meses";

    const formatedPeriod = `${formatDate(periodParts[0])} - ${formatDate(periodParts[1])} · ${duration}`;

    return (
        <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-1">
                <div className={`flex gap-4 bg-zinc-900 border-glow p-6 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <img
                        src={companyLogo}
                        alt={company}
                        className="w-12 h-12 flex-none rounded-lg"
                    />

                    <div>
                        <h3 className="text-xl font-semibold">{role}</h3>
                        <p className="text-sm mt-1">{company}</p>
                        <p className="text-zinc-400 text-sm">{formatedPeriod}</p>
                        <p className="text-zinc-400 mt-3 text-sm leading-relaxed">{description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {tags.map((t) => (
                            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex w-6 h-6 rounded-full bg-zinc-50 border-8 border-zinc-950 flex-shrink-0 z-10" />
            <div className="flex-1 hidden md:block" />
        </div>
    )
}

export default ExperienceCard