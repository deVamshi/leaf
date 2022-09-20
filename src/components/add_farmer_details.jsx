

import React from 'react'

import {Label, TextInput, Checkbox, Button, Card} from 'flowbite-react'

function AddFarmerDetails() {
  return (
    <div className='max-w-4xl'>

      <h1 className='text-2xl font-semibold mt-2 mb-6'>Add Farmer Details:</h1>


    <Card >
    
    <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Serial No:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div>

  <div>
    <div className="mb-2 block">
      <Label
        value="Farmer Name:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        value="DAEO Name:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div> <div>
    <div className="mb-2 block">
      <Label
        value="Address:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div> <div>
    <div className="mb-2 block">
      <Label
        value="Village:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div> <div>
    <div className="mb-2 block">
      <Label
        value="Serial No:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div> <div>
    <div className="mb-2 block">
      <Label
        value="Sub-District:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div> <div>
    <div className="mb-2 block">
      <Label
        value="District:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div> <div>
    <div className="mb-2 block">
      <Label
        value="Pincode:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div> <div>
    <div className="mb-2 block">
      <Label
        value="ID Proof No:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div>

  <div>
    <div className="mb-2 block">
      <Label
        value="Mobile No:"
      />
    </div>
    <TextInput
      id="serialno"
      placeholder=""
      required={true}
    />
  </div>


  
  
  <Button type="submit">
    Submit
  </Button>
</form>
</Card>

</div>

  )
}

export default AddFarmerDetails