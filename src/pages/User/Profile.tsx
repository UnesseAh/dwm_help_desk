export function Profile() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="rounded-lg border border-border bg-card p-6">

        <h2 className="text-3xl font-bold">
          My Profile
        </h2>

        <p className="mt-2 text-muted-foreground">
          View and manage your personal information.
        </p>

      </div>

      {/* Personal Information */}

      <div className="grid gap-6 lg:grid-cols-12">

        {/* Avatar Card */}

<div className="rounded-lg border border-border bg-card p-6 lg:col-span-3">

  <div className="flex flex-col items-center justify-center">

    {/* Avatar */}

    <div className="flex h-40 w-40 items-center justify-center rounded-full bg-muted">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-muted-foreground"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
      </svg>

    </div>

    {/* Button */}

    <button className="mt-8 rounded-lg border border-primary px-6 py-2 text-primary transition hover:bg-primary hover:text-primary-foreground">

      Change Photo

    </button>

  </div>

</div>

        

        {/* Personal Information */}

<div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">

  <h3 className="mb-8 text-xl font-semibold">
    Personal Information
  </h3>

  <div className="grid gap-y-6">

    {/* Full Name */}
    <div className="grid grid-cols-2 border-b pb-3">
      <span className="font-medium text-muted-foreground">
        Full Name
      </span>

      <span>
        User Test 1
      </span>
    </div>

    {/* Username */}
    <div className="grid grid-cols-2 border-b pb-3">
      <span className="font-medium text-muted-foreground">
        Username
      </span>

      <span>
        test1
      </span>
    </div>

    {/* Email */}
    <div className="grid grid-cols-2 border-b pb-3">
      <span className="font-medium text-muted-foreground">
        Email
      </span>

      <span>
        test1@email.com
      </span>
    </div>

    {/* Department */}
    <div className="grid grid-cols-2 border-b pb-3">
      <span className="font-medium text-muted-foreground">
        Department
      </span>

      <span>
        IT Support
      </span>
    </div>

    {/* Role */}
    <div className="grid grid-cols-2">
      <span className="font-medium text-muted-foreground">
        Role
      </span>

      <span>
        User
      </span>
    </div>

  </div>

</div>

      </div>

      {/* Contact Information */}

<div className="rounded-lg border border-border bg-card p-6 lg:col-span-5">

  <h3 className="mb-8 text-xl font-semibold">
    Contact Information
  </h3>

  <div className="grid gap-y-6">

    {/* Phone Number */}
    <div className="grid grid-cols-2 border-b pb-3">
      <span className="font-medium text-muted-foreground">
        Phone Number
      </span>

      <span>
        +212 6 XX XX XX XX
      </span>
    </div>

    {/* Email */}
    <div className="grid grid-cols-2 border-b pb-3">
      <span className="font-medium text-muted-foreground">
        Email
      </span>

      <span>
        test1@email.com
      </span>
    </div>

    {/* Address */}
    <div className="grid grid-cols-2">
      <span className="font-medium text-muted-foreground">
        Address
      </span>

      <span>
        Casablanca, Morocco
      </span>
    </div>

  </div>

</div>

      {/* Account Information */}

<div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">

  <h3 className="mb-8 text-xl font-semibold">
    Account Information
  </h3>

  <div className="grid gap-y-6">

    {/* Username */}
    <div className="grid grid-cols-2 border-b pb-3">
      <span className="font-medium text-muted-foreground">
        Username
      </span>

      <span>
        test1
      </span>
    </div>

    {/* Account Status */}
    <div className="grid grid-cols-2 border-b pb-3">
      <span className="font-medium text-muted-foreground">
        Account Status
      </span>

      <span className="flex items-center gap-2">

        <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

        Active

      </span>
    </div>

    {/* Member Since */}
    <div className="grid grid-cols-2">
      <span className="font-medium text-muted-foreground">
        Member Since
      </span>

      <span>
        January 2026
      </span>
    </div>

  </div>

</div>

     {/* Actions */}

<div className="rounded-lg border border-border bg-card p-6">

  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

    {/* Cancel */}

    <button
      className="
        rounded-lg
        border
        border-border
        px-6
        py-2.5
        font-medium
        transition-colors
        hover:bg-muted
      "
    >
      Cancel
    </button>

    {/* Save Changes */}

    <button
      className="
        rounded-lg
        bg-primary
        px-6
        py-2.5
        font-medium
        text-primary-foreground
        transition-opacity
        hover:opacity-90
      "
    >
      Save Changes
    </button>

  </div>

</div>

    </div>
  )
}