import { useState } from "react";
import { AdminContainer } from "./styled.Admin";
import FormProducts from './../../components/Forms/FormProducts'
import { MdCreateNewFolder } from "react-icons/md";
import { VscDashboard } from "react-icons/vsc";

export function AdminPage(){
    const [adminView, setAdminView] = useState(0)
    return(
        <AdminContainer>
            <aside>
                <button>
                      <span>Criar Produto</span>
                      <VscDashboard/>
                </button>
                <button onClick={()=>{setAdminView(1)}}>
                    <span>Criar Produto</span>
                    <MdCreateNewFolder/>
                </button>
     
            </aside>
            {adminView ===1 && <FormProducts/>}
        </AdminContainer>    
    )
}