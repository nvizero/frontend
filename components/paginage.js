import parse from "html-react-parser";
import Link from "next/link";
const Paginage = (props) => {
  
  return (
    <div className="col-lg-12 text-center">
      <div className="pagination__option">
        {props.links.map((row, key) => {
          let show = parse(row.label);
          if (key === 0) {
            show = parse(row.label.split(" ")[0]);
          }
          if (key === props.links.length - 1) {
            show = parse(row.label.split(" ")[1]);
          }
          let _href = row.url!==null ? row.url :"#";
          return (            
              <Link href={_href} key={key}>
                <a href="#" key={key}  >
                  {show}
                </a>
              </Link>            
          );
        })}
      </div>
    </div>
  );
};
export default Paginage;
