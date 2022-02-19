import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvForm,AvField} from 'availity-reactstrap-validation'
function TodoModal({isOpen,toggle,submitTodo,Todo}) {
    return <Modal isOpen={isOpen} toggle={()=>toggle()}>
        <ModalHeader>
            ADD TODO
        </ModalHeader>
        <ModalBody>
            <AvForm onSubmit={submitTodo} id={'forTodos'} model={Todo?Todo:{}}>
                <AvField label={'Todo'} type={'text'} name={'title'} placeholder={'Enter todo title...'}
                         className={'mb-3'}/>
            </AvForm>
        </ModalBody>
        <ModalFooter>
            <button className={'btn btn-success'}  form={'forTodos'}>save</button>
            <button className={'btn btn-danger'} onClick={()=>toggle()}>cancel</button>
        </ModalFooter>
    </Modal>
}

export default TodoModal