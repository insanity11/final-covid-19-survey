 /** 
 * @author Shardul bhardwaj, Hameez Iqbal and Brandon Nguyen
 * 
 */
data = {
    wardNum: undefined,
    gender: undefined,
    ageRange: undefined,
    highestLevelEducation: undefined,
    incomeRange: undefined,
    recivedVaccine: undefined,
    livingConditionsRating: undefined,
    mentalHealthRating: undefined,
    isUnemployed: undefined,
    basicNecessitiesAccessible: undefined,
    email: undefined,
    signature: undefined
}
/** sets the ward number that the user chooses
 *  @param num sets value of data.wardNum to num
 */  
function setWard(num) {
    data.wardNum = num;
    console.log("ward Num = " +  data.wardNum)
}
/** sets the gender that the user chooses
 *  @param gender sets value of data.gender to gender
 */ 
function setGender(gender){
    data.gender = gender
    console.log("Gender:" + data.gender)
}
/** sets the age range that the user chooses  
 *  @param age  sets value of data.ageRange to age
 */
function setAge(ageRange){
    data.ageRange = ageRange
    console.log("Age:" + data.ageRange)
}
/** sets the level of education that the user chooses
 *  @param degree sets value of data.highestLevelEducation to degree
 */   
function setEducation(degree){
    data.highestLevelEducation = degree
    console.log("Education:" + data.highestLevelEducation) 
}
/** sets the range of income that the user chooses
 *  @param money sets value of data.incomeRange to money
 */  
function yearlyIncome(money){
    data.incomeRange = money
    console.log("yearly income:" + data.incomeRange)
}
/** sets whether if the user chooses true or false
 *  @param vaccine sets value of data.recivedVaccine to vaccine
 */ 
function vaccine(vaccine){
    data.recivedVaccine = vaccine
    console.log("Vaccine:" + data.recivedVaccine)
}
/** sets the rating of their home conditions that the user chooses
 *  @param num sets value of data.livingConditionRating to num
 */ 
function homeConditions(num){
    data.livingConditionsRating = num
    console.log("homeConditions:" + data.livingConditionsRating)
}
/** sets the rating of their mental health that the user chooses
 *  @param num sets value of data.mentalHealthRating to num
 */  
function mentalHealth(num){
    data.mentalHealthRating = num
    console.log("mental health:"+ data.mentalHealthRating)
}
/** sets whether the user checks yes or no to whether it has been tough to find a job while unemployed
 *  @param job sets value of data.isUnemployed to job
 */ 
function unemployed(job){
    data.isUnemployed = job
    console.log("unemployed:" + data.isUnemployed)
}
/** sets whether the users is able to access basicNecessities
 *  @param basicNecessities sets value of data.basicNecessitiesAccessible to basicNecessities
 */ 
function necessities(basicNecessities){
    data.basicNecessitiesAccessible = basicNecessities
    console.log("basicNecessities:" + data.basicNecessitiesAccessible)
}
// the user will type out his/her email

function email(){
    let enterEmail_El = document.getElementById("enterEmail").value
    if(enterEmail_El.includes("@gmail.com")){
        data.email = enterEmail_El
        console.log("Email:" + data.email)
    } 
}
// this is where the user will type out his/her signature
function electronicSignature(){
    let signature_El = document.getElementById("Signature").value
    data.signature = signature_El
    console.log("Signature:" + data.signature)
    
}
// this will submit the survey
function submit(){
    let errorEl = document.getElementById("Error")
    if(data.wardNum === undefined || data.gender === undefined || data.ageRange === undefined || data.highestLevelEducation === undefined ||
    data.incomeRange === undefined || data.recivedVaccine === undefined || data.livingConditionsRating === undefined || data.mentalHealthRating === undefined ||
    data.isUnemployed === undefined || data.basicNecessitiesAccessible === undefined || data.email === undefined || data.signature === undefined){
        errorEl.textContent = "ERROR: you may have not put a domain in your email or you may have missed a checkbox"
    }
    else{
        errorEl.textContent = "thank you for completing our short survey"
    }
}
