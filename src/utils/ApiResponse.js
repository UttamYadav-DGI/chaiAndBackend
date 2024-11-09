class ApiResponse{
    constructor(statusCode,data,message="success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400// y har comany k alg alg hota hai 404/504/like that
    }
}