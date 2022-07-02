export function calculateGap(gap: number | undefined, position: 'left' | 'right' | undefined) {
    
    if(gap == undefined) {
        return {}
    }
    
    if(position == 'left') {
        return { marginLeft: (gap/2)}
    } else {
        return { marginRight: (gap/2)}
    }
}