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
