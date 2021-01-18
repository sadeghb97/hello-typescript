"use strict";
var ProjectSingleton = (function () {
    function ProjectSingleton() {
        this.value = Math.random();
    }
    ProjectSingleton.getInstance = function () {
        if (!this.instance)
            this.instance = new ProjectSingleton;
        return this.instance;
    };
    return ProjectSingleton;
}());
var firstInstance = ProjectSingleton.getInstance();
var secondInstance = ProjectSingleton.getInstance();
console.log(firstInstance === secondInstance);
console.log(firstInstance.value);
