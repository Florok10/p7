import Dropdown from '../generic/Dropdown';

const AboutDropdownList = () => {
  const dropdownProps = [
    {
      title: 'Fiabilité',
      list: [
        {
          content:
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        },
      ],
    },
    {
      title: 'Respect',
      list: [
        {
          content:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
      ],
    },
    {
      title: 'Service',
      list: [
        {
          content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
      ],
    },
    {
      title: 'Responsabilité',
      list: [
        {
          content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
      ],
    },
  ];
  return (
    <ul className='dropdown-list'>
      {dropdownProps.map(({ title, list }) => (
        <li className='dropdown-list-item' key={title}>
          <Dropdown title={title} list={list} />
        </li>
      ))}
    </ul>
  );
};

export default AboutDropdownList;
