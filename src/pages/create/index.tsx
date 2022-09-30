import { Button } from "components/Button";
import { useFilePreview } from "hooks/useFilePreview";
import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useEventContext } from "store";
import { event } from "types";
import { IoMdClose } from "react-icons/io";

function Field({
  label,
  id,
  onChange,
  value,
  type = "text",
  required = false,
}: {
  label: string;
  type?: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-bold mb-1">
        {label}
        {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="border w-full border-purple-2 px-4 py-2 rounded "
      />
    </div>
  );
}

function FileInput({
  preview,
  onChange,
}: {
  preview: string | null;
  onChange: (file: File | null) => void;
}) {
  return (
    <div>
      {preview ? (
        <div className="relative w-36 h-36 rounded">
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => onChange(null)}
            type="button"
            className="absolute w-8 h-8 inline-grid place-items-center font-bold top-0 right-0 bg-red-500 rounded-full text-white shadow-sm"
          >
            <IoMdClose />
          </button>
        </div>
      ) : (
        <label className="bg-white w-20 h-20 grid place-items-center text-center border border-dotted border-purple-dark cursor-pointer">
          <span className="text-sm">click to upload</span>
          <input
            type="file"
            onChange={(e) => {
              let files = e.target.files;

              if (files && files.length > 0) {
                onChange(files[0]);
              }
            }}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}

export function CreateEvent() {
  const [event, setEvent] = useEventContext();

  const [formData, setFormData] = useState<event>(
    event ?? {
      name: "",
      hostname: "",
      startDate: "",
      endDate: "",
      location: {
        street: "",
        suburb: "",
        state: "",
        postcode: "",
      },
      photo: null,
    }
  );

  const history = useHistory();

  const previewURL = useFilePreview(formData.photo);

  console.log({ previewURL });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEvent(formData);
    history.push("/event");
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id: name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id: name, value } = e.target;
    console.log({ name, value })
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [name]: value,
      },
    });
  };

  const handlePhotoChange = (file: File | null) => {
    setFormData({
      ...formData,
      photo: file ?? null,
    });
  };

  return (
    <div className="py-10 px-6 ">
      <h3 className="text-3xl font-bold mb-16">New event</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-fields grid gap-4">
          <Field
            label="Event name"
            id="name"
            value={formData.name}
            onChange={handleFieldChange}
            required
          />

          <Field
            label="Host name"
            id="hostname"
            value={formData.hostname}
            onChange={handleFieldChange}
            required
          />

          <div className="grid grid-cols-2 gap-2">
            <Field
              type="date"
              label="Start date"
              id="startDate"
              value={formData.startDate}
              onChange={handleFieldChange}
              required
            />

            <Field
              type="date"
              label="End Date"
              id="endDate"
              value={formData.endDate}
              onChange={handleFieldChange}
              required
            />
          </div>

          <fieldset>
            <legend className="text-2xl mb-4">Location</legend>

            <div className="grid gap-4">
              <Field
                label="Street name"
                id="street"
                value={formData.location.street}
                onChange={handleLocationChange}
                required
              />

              <Field
                label="Suburb"
                id="suburb"
                value={formData.location.suburb}
                onChange={handleLocationChange}
                required
              />

              <Field
                id="state"
                label="State"
                value={formData.location.state}
                onChange={handleLocationChange}
                required
              />

              <Field
                label="Postcode"
                id="postcode"
                value={formData.location.postcode}
                onChange={handleLocationChange}
                required
              />
            </div>
          </fieldset>

          <div>
            <p className="font-bold mb-1">Event photo</p>
            <FileInput preview={previewURL} onChange={handlePhotoChange} />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" inline>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
