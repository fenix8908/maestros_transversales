
export class MasterTypeList{

    id:string;
    name:string;
    description:string;


}

export class MasterList{
    idTypeList:string;
    parent:MasterListParent;
    nameApplication:string;
    code:string;
    name:string;
    isActive:boolean;
    description:string;
}

export class MasterListParent{
    id:string;
    idTypeList:string;
    parent:MasterListParent;
    nameApplication:string;
    code:string;
    name:string;
    isActive:boolean;
    description:string;
}
