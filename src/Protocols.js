import "./Protocols.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Protocols = ({
  name,
  symbol,
  logo,
  audits,
  audit_links,
  chain,
  oracles,
  tvl,
  description,
  change_7d,
}) => {
  return (
    <div className="protocol-container">
      <Container>
        <Row>
          <Col sm={2}>
            <div className="protocol-name">
              <pre></pre>
              <h1>{name}</h1>
            </div>
          </Col>
          <Col>
            <pre></pre>
            <p className="symbol">{symbol}</p>
          </Col>
          <Col>
            <pre></pre>
            <img src={logo} alt="crypto" />
          </Col>
          <Col sm={2}>
            <div className="audits">
              <pre>
                audits:
                {audits < 1 ? (
                  <strong className="red">{audits}</strong>
                ) : (
                  <strong className="green">{audits}</strong>
                )}
              </pre>

              <p className="audit-links-name">{audit_links}</p>
            </div>
          </Col>
          <Col>
            <div className="chain">
              <pre>chain</pre>
              <p className="chain-name">{chain}</p>
            </div>
          </Col>
          <Col>
            <div className="oracles">
              <pre>oracles</pre>
              <p className="oracles-name">{oracles}</p>
            </div>
          </Col>
          <Col>
            <div className="tvl">
              <pre>TVL[mln]</pre>
              <p className="tvl-name">${(tvl / 1000000).toLocaleString()}</p>
            </div>
          </Col>
          <Col sm={2}>
            <div className="description">
              <pre>description</pre>
              <p className="description-name">{description}</p>
            </div>
          </Col>
          <Col>
            <pre>change 7d</pre>
            {change_7d < 0 ? (
              <p className="change red">{change_7d?.toFixed(2)}%</p>
            ) : (
              <p className="change green">{change_7d?.toFixed(2)}%</p>
            )}
          </Col>
        </Row>
      </Container>
      {/* <div className="protocol-row">
        <div className="protocol-name">
          <h1>{name}</h1>
          <p className="symbol">{symbol}</p>
          <img src={logo} alt="crypto" />
        </div>
        <div className="audits">
          <p className="audits-number">Number of audits: {audits}</p>
        </div>
        <div className="audit-links">
          <p className="audit-links-name">{audit_links}</p>
        </div>
        <div className="chain">
          <p className="chain-name">{chain}</p>
        </div>
        <div className="oracles">
          <p className="oracles-name">{oracles}</p>
        </div>
        <div className="tvl">
          <p className="tvl-name">${tvl.toLocaleString()}</p>
        </div>
        <div className="description">
          <p className="description-name">{description}</p>
        </div>
        {change_7d < 0 ? (
          <p className="change red">{change_7d?.toFixed(2)}%</p>
        ) : (
          <p className="change green">{change_7d?.toFixed(2)}%</p>
        )}
      </div> */}
    </div>
  );
};

export default Protocols;
