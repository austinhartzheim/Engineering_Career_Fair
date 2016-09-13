/*

D_MASK_1:	AMEP	AOS	ASPHYS	BIOCHEM	BME	BSE
D_MASK_2:	CEE	CHE	CHEM	CMPE	CS	ECT	
D_MASK_3:	EE	EMA	ENG	ENVSCI	EP	
D_MASK_4:	FOODSCI	GEO	GLE	IE	LMS	MatE
D_MASK_5:	MATH	ME	MPHY	MS	MSE	NEEP
D_MASK_6:	OTM	PHM	PHY	STAT	TOX

*/


/* ENCODE DEGREE MASK 1 */
var AMEP_mask = 15728640;  //00000000111100000000000000000000
var AOS_mask = 983040;     //00000000000011110000000000000000
var ASPHYS_mask = 61440;   //00000000000000001111000000000000
var BIOCHEM_mask = 3840;   //00000000000000000000111100000000
var BME_mask = 240;        //00000000000000000000000011110000
var BSE_mask = 15;         //00000000000000000000000000001111

var degree_mask_1_array = {
    AMEP: AMEP_mask, 
    AOS: AOS_mask, 
    ASPHYS: ASPHYS_mask, 
    BIOCHEM: BIOCHEM_mask, 
    BME: BME_mask, 
    BSE: BSE_mask
};

/* ENCODE DEGREE MASK 2 */
var CEE_mask = 15728640;   //00000000111100000000000000000000
var CHE_mask = 983040;     //00000000000011110000000000000000
var CHEM_mask = 61440;     //00000000000000001111000000000000
var CMPE_mask = 3840;      //00000000000000000000111100000000
var CS_mask = 240;         //00000000000000000000000011110000
var ECT_mask = 15;         //00000000000000000000000000001111

var degree_mask_2_array = {
    CEE: CEE_mask, 
    CHE: CHE_mask, 
    CHEM: CHEM_mask, 
    CMPE: CMPE_mask, 
    CS: CS_mask, 
    ECT: ECT_mask
};

/* ENCODE DEGREE MASK 3 */
var EE_mask = 983040;      //00000000000011110000000000000000
var EMA_mask = 61440;      //00000000000000001111000000000000
var ENG_mask = 3840;       //00000000000000000000111100000000
var ENVSCI_mask = 240;     //00000000000000000000000011110000
var EP_mask = 15;          //00000000000000000000000000001111

var degree_mask_3_array = {
    EE: EE_mask, 
    EMA: EMA_mask, 
    ENG: ENG_mask, 
    ENVSCI: ENVSCI_mask, 
    EP: EP_mask
};

/* ENCODE DEGREE MASK 4 */
var FOODSCI_mask = 15728640; //00000000111100000000000000000000
var GEO_mask = 983040;       //00000000000011110000000000000000
var GLE_mask = 61440;        //00000000000000001111000000000000
var IE_mask = 3840;          //00000000000000000000111100000000
var LMS_mask = 240;          //00000000000000000000000011110000
var MatE_mask = 15;          //00000000000000000000000000001111

var degree_mask_4_array = {
    FOODSCI: FOODSCI_mask, 
    GEO: GEO_mask, 
    GLE: GLE_mask, 
    IE: IE_mask, 
    LMS: LMS_mask, 
    MatE: MatE_mask
};

/* ENCODE DEGREE MASK 5 */
var MATH_mask = 15728640;  //00000000111100000000000000000000
var ME_mask = 983040;      //00000000000011110000000000000000
var MPHY_mask = 61440;     //00000000000000001111000000000000
var MS_mask = 3840;        //00000000000000000000111100000000
var MSE_mask = 240;        //00000000000000000000000011110000
var NEEP_mask = 15;        //00000000000000000000000000001111

var degree_mask_5_array = {
    MATH: MATH_mask, 
    ME: ME_mask, 
    MPHY: MPHY_mask, 
    MS: MS_mask, 
    MSE: MSE_mask, 
    NEEP: NEEP_mask
};

/* ENCODE DEGREE MASK 6 */
var OTM_mask = 983040;     //00000000000011110000000000000000
var PHM_mask = 61440;      //00000000000000001111000000000000
var PHY_mask = 3840;       //00000000000000000000111100000000
var STAT_mask = 240;       //00000000000000000000000011110000
var TOX_mask = 15;         //00000000000000000000000000001111

var degree_mask_6_array = {
    OTM: OTM_mask, 
    PHM: PHM_mask, 
    PHY: PHY_mask, 
    STAT: STAT_mask, 
    TOX: TOX_mask
};

/* ENCODE POSITION MASK */
var I_mask = 8947848;    //00000000100010001000100010001000
var C_mask = 4473924;    //00000000010001000100010001000100
var E_mask = 2236962;    //00000000001000100010001000100010
var X_mask = 1118481;    //00000000000100010001000100010001

var position_mask_array = {
    I: I_mask, 
    C: C_mask, 
    E: E_mask, 
    X: X_mask
};

/* ENCODE CITIZEN MASK */
var US_mask = 4;  //100
var PR_mask = 2;  //010
var VH_mask = 1;  //001

var DEFAULT_DAY_ID = 0;
