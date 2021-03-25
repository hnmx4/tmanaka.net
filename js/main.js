const genInfoSectionItem = (name, text, labelClass) => {
    const item = `
<li class="item">
    <div class="item-label"><i class="${labelClass}"></i></div>
    <div class="item-text-wrap">
        <div class="item-name">${name}</div>
        <div class="item-text">${text}</div>
    </div>
</li>
`;
    return(item);
};

const genSocialSectionItem = (name, text, url, labelClass) => {
    const item = `
<li class="item">
    <div class="item-label"><i class="${labelClass}"></i></div>
    <div class="item-text-wrap">
        <div class="item-name">${name}</div>
        <div class="item-text"><a href="${url}">${text}</a></div>
    </div>
</li>
`;
    return(item);
};

const genWorkExperiencesSectionItem = (term, org, info) => {
    const item = `
<li class="item">
    <div class="text-term">${term}</div>
    <div>
        <h3 class="item-headline">${org}</h3>
        <div class="item-text">
            ${info}
        </div>
    </div>
</li>
`;
    return(item);
};

const genEducationSectionItem = (term, degree, info) => {
    const item = `
<li class="item">
    <div class="text-term">${term}</div>
    <div>
        <h3 class="item-headline">${degree}</h3>
        <div class="item-text">
            ${info}
        </div>
    </div>
</li>
`;
    return(item);
};

const genSkillLevelGraph = (level) => {
    const max = 10;
    const fill = Array.from({length:level}, _ => '<div class="fill-circle"></div>');
    const empty = Array.from({length:max-level}, _ => '<div class="empty-circle"></div>');
    const ret = fill.concat(empty).join('');
    return(ret);
}

const genSkillsSectionItem = (category, skillList) => {
    // skillList format [['name', level], ['name2', level],...]
    const skillItems = Array.from(skillList, x => `
<li class="skill-item">
    <div class="skill-name">${x[0]}</div>
    <div class="skill-level">
        ${genSkillLevelGraph(x[1])}
    </div>
</li>`
    );

    const item = `
<li class="item">
    <h3 class="item-headline">${category}</h3>
    <ul class="item-text">
        ${skillItems.join("\n")}
    </ul>
</li>    
`;
    console.log(item);
    return(item);
};

const genPublicationSectionItem = (title, author, info) => {
    const item = `
<li class="item">
    <h3 class="item-headline">${title}</h3>
    <div class="item-text">
        ${author}<br />
        ${info}
    </div>
</li>
`;
    return(item);
};

const genVolunteerWorkSectionItem = (term, org, info) => {
    const item = `
<li class="item">
    <div class="text-term">${term}</div>
    <div>
        <h3 class="item-headline">${org}</h3>
        <div class="item-text">
            ${info}
        </div>
    </div>
</li>
`;
    return(item);
};
