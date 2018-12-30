import { StyleSheet } from 'react-native';
import variables from './variables';


export default StyleSheet.create({
    bgPrimary: {
        backgroundColor: variables.colors.primary
    },
    bgSecondary: {
        backgroundColor: variables.colors.secondaryBackground
    },
    primaryFont: {
        color: variables.colors.primaryFont,
        fontSize: 14
    },
    defaultBorder: {
        borderWidth: 1,
        borderColor: variables.colors.borderColor
    },
    secondaryFont: {
        color: variables.colors.secondaryFont,
        fontSize: 12
    },
    dangerFont: {
        color: variables.colors.dangerFont
    },
    successFont: {
        color: variables.colors.successFont
    },
    lightBold: {
        color: 'white',
        fontWeight: 'bold',
    },
    heading1: {
        fontSize: 24,
        color: variables.colors.primaryFont,
        fontWeight: 'bold',
    },
    heading2: {
        fontSize: 22,
        color: variables.colors.primaryFont,
        fontWeight: 'bold',
    },
    
    heading3: {
        fontSize: 20,
        color: variables.colors.primaryFont,
        fontWeight: 'bold',
    },
    heading4: {
        fontSize: 18,
        color: variables.colors.primaryFont,
        fontWeight: 'bold',
    },
    heading5: {
        fontSize: 18,
        color: variables.colors.primaryFont,
        fontWeight: 'bold',
    },
    heading6: {
        fontSize: 16,
        color: variables.colors.primaryFont,
        fontWeight: 'bold',
    },
    m1: {
        margin: variables.dimensions.distances[1]
    },    
    m2: {
        margin: variables.dimensions.distances[2]
    },
    m3: {
        margin: variables.dimensions.distances[3]
    },
    mt1: {
        marginTop: variables.dimensions.distances[1]
    },    
    mt2: {
        marginTop: variables.dimensions.distances[2]
    },
    mt3: {
        marginTop: variables.dimensions.distances[3]
    },
    mr1: {
        marginRight: variables.dimensions.distances[1]
    },
    mr2: {
        marginRight: variables.dimensions.distances[2]
    },
    mr3: {
        marginRight: variables.dimensions.distances[3]
    },
    mb1: {
        marginBottom: variables.dimensions.distances[1]
    },
    mb2: {
        marginBottom: variables.dimensions.distances[2]
    },
    mb3: {
        marginBottom: variables.dimensions.distances[3]
    },
    ml1: {
        marginLeft: variables.dimensions.distances[1]
    },
    ml2: {
        marginLeft: variables.dimensions.distances[2]
    },
    ml3: {
        marginLeft: variables.dimensions.distances[3]
    },
    vm1: {
        marginTop: variables.dimensions.distances[1],
        marginBottom: variables.dimensions.distances[1]
    },
    vm2: {
        marginTop: variables.dimensions.distances[2],
        marginBottom: variables.dimensions.distances[2]
    },
    vm3: {
        marginTop: variables.dimensions.distances[3],
        marginBottom: variables.dimensions.distances[3]
    },
    hm1: {
        marginLeft: variables.dimensions.distances[1],
        marginRight: variables.dimensions.distances[1]
    },
    hm2: {
        marginLeft: variables.dimensions.distances[2],
        marginRight: variables.dimensions.distances[2]
    },
    hm3: {
        marginLeft: variables.dimensions.distances[3],
        marginRight: variables.dimensions.distances[3]
    },
    p1: {
        padding: variables.dimensions.distances[1]
    },
    p2: {
        padding: variables.dimensions.distances[2]
    },
    p3: {
        padding: variables.dimensions.distances[3]
    },
    pt1: {
        paddingTop: variables.dimensions.distances[1]
    },
    pt2: {
        paddingTop: variables.dimensions.distances[2]
    },
    pt3: {
        paddingTop: variables.dimensions.distances[3]
    },
    pr1: {
        paddingRight: variables.dimensions.distances[1]
    },
    pr2: {
        paddingRight: variables.dimensions.distances[2]
    },
    pr3: {
        paddingRight: variables.dimensions.distances[3]
    },
    pb1: {
        paddingBottom: variables.dimensions.distances[1]
    },
    pb2: {
        paddingBottom: variables.dimensions.distances[2]
    },
    pb3: {
        paddingBottom: variables.dimensions.distances[3]
    },
    pl1: {
        paddingLeft: variables.dimensions.distances[1]
    },
    pl2: {
        paddingLeft: variables.dimensions.distances[2]
    },
    pl3: {
        paddingLeft: variables.dimensions.distances[3]
    },
    vp1: {
        paddingTop: variables.dimensions.distances[1],
        paddingBottom: variables.dimensions.distances[1]
    },
    vp2: {
        paddingTop: variables.dimensions.distances[2],
        paddingBottom: variables.dimensions.distances[2]
    },
    vp3: {
        paddingTop: variables.dimensions.distances[3],
        paddingBottom: variables.dimensions.distances[3]
    },
    hp1: {
        paddingLeft: variables.dimensions.distances[1],
        paddingRight: variables.dimensions.distances[1]
    },
    hp2: {
        paddingLeft: variables.dimensions.distances[2],
        paddingRight: variables.dimensions.distances[2]
    },
    hp3: {
        paddingLeft: variables.dimensions.distances[3],
        paddingRight: variables.dimensions.distances[3]
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    evenlyRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    r1: {
        borderRadius: variables.dimensions.distances[1]/2
    },
    r2: {
        borderRadius: variables.dimensions.distances[2]/2
    },
    primaryButton: {
        backgroundColor: variables.colors.primary,
        height: 55
    }
});