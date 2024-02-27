import * as Elements from "./Elements";

import { Button, Input, Modal } from "../../../theme";

export const SearchingForm = () => {
  return (
    <Elements.SearchingBoxModal onClick={(event) => event.stopPropagation()}>
      <Modal>
        <Elements.SearchingForm>
          <Input
            placeholder="Введіть ваш запит..."
          />
          <Button>Знайти</Button>
        </Elements.SearchingForm>
      </Modal>
    </Elements.SearchingBoxModal>
  );
}