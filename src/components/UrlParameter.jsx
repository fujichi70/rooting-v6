import { useLocation, useParams, useNavigate } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const navigate = useNavigate();
  const onClickBack = () => navigate("/page2/");
  return (
    <>
      <h1>UrlParameter</h1>
      <p>this is UrlParameter.</p>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは {query.get("name")} です </p>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};
