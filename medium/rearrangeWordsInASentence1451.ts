function arrangeWords(text: string): string {
    let str = text.split(" ");
    str[0] = str[0][0].toLowerCase() + str[0].slice(1);

    str.sort((a: string, b: string) => a.length - b.length);
    str[0] = str[0][0].toUpperCase() + str[0].slice(1);

    return str.join(" ");
}
