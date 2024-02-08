export const showDescriptionText = (description: string | undefined) => {    
    if(description === undefined || description === ''){
        return 'Add description';
    }
    return description;
}