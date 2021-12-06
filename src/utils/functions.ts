const spaceCheck = (text: string): boolean => {
    return (!text || !text.match(/\S/g));
}

export { spaceCheck }
