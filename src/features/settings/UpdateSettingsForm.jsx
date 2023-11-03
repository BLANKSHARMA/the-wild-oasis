import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useEditSetting } from './useEditSettings';
import { useSettings } from './useSettings';

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useEditSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field, defaultValue) {
    const { value } = e.target;

    if (defaultValue === Number(value)) return;
    if (!value) return;

    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min-nights'
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'minBookingLength', minBookingLength)}
        />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max-nights'
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'maxBookingLength', maxBookingLength)}
        />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max-guests'
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) =>
            handleUpdate(e, 'maxGuestsPerBooking', maxGuestsPerBooking)
          }
        />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast-price'
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'breakfastPrice', breakfastPrice)}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
