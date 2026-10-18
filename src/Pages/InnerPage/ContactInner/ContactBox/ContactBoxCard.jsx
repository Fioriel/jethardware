const ContactBoxCard = ({ icon, title, value }) => {
  return (
    <div className="border border-gray-200 p-8 text-center hover:shadow-md transition">
      <div className="text-3xl text-PrimaryColor-0 mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  );
};

export default ContactBoxCard;
